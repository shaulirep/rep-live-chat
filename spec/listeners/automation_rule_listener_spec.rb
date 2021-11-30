require 'rails_helper'
describe AutomationRuleListener do
  let(:listener) { described_class.instance }
  let(:account) { create(:account) }
  let(:inbox) { create(:inbox, account: account) }
  let(:contact) { create(:contact, account: account, identifier: '123') }
  let(:contact_inbox) { create(:contact_inbox, contact: contact, inbox: inbox) }
  let(:conversation) { create(:conversation, contact_inbox: contact_inbox, inbox: inbox, account: account, status: :resolved) }
  let!(:automation_rule) { create(:automation_rule, account: account) }
  let!(:team) { create(:team, account: account) }
  let(:user) { create(:user, account: account) }
  let(:account_user) { create(:user, user: user, account: account, role: 'agent') }

  let!(:event) do
    Events::Base.new('conversation_status_changed', Time.zone.now, { conversation: conversation })
  end

  before(:each) do
    automation_rule.update_column('actions',
      [
        {
          "action_name"=>"send_email_to_team", "action_params"=>{ "message"=>"Please pay attention to this conversation, its from high priority customer", "team_ids"=>[team.id] }
        },
        { "action_name"=>"assign_team", "action_params"=>[team.id] },
        { "action_name"=>"add_label", "action_params"=>["support", "priority_customer"] },
        { "action_name"=>"assign_best_agents", "action_params"=>[user.id] }
      ]
    )
  end

  describe '#conversation_status_changed' do
    context 'when rule matches' do
      it 'triggers automation rule' do
        expect(conversation.team_id).not_to eq(team.id)

        automation_rule
        listener.conversation_status_changed(event)

        conversation.reload
        expect(conversation.team_id).to eq(team.id)
      end
    end
  end
end
