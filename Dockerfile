FROM ubuntu:20.04
MAINTAINER "Shauli Mizrahi" shauli@hellorep.ai
RUN wget https://raw.githubusercontent.com/shaulirep/rep-live-chat/master/deployment/setup_20.04.sh -O setup.sh
RUN chmod 755 setup.sh
RUN ./setup.sh master


EXPOSE 3000
