FROM debian
MAINTAINER Ivan Molineris <ivan.molineris@unito.it>

ENV LANG=C LC_ALL=C
RUN apt-get update 
RUN apt-get install -y r-base r-cran-devtools r-cran-biocmanager libboost-all-dev python3 curl libssl-dev libcurl4-openssl-dev libxml2-dev git && apt-get clean
ADD installer.r /usr/bin/installer.r
RUN r  /usr/bin/installer.r
ADD triplex_wrapper.r  /usr/bin/triplex_wrapper.r
RUN pwd
ENTRYPOINT ["/usr/bin/triplex_wrapper.r"]
