class AddDefaultValueToColor < ActiveRecord::Migration[6.0]
  def up
    Label.where(color: nil).find_each { |u| u.update(color: '#3B3A8F') }

    change_column :labels, :color, :string, default: '#3B3A8F', null: false
  end

  def down
    change_column :labels, :color, :string, default: nil, null: true
  end
end
