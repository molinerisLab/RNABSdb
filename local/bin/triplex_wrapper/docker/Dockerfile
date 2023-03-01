FROM debian
MAINTAINER Ivan Molineris <ivan.molineris@unito.it>

ENV LANG=C LC_ALL=C
RUN apt-get update 
RUN apt-get install -y r-base r-cran-devtools r-cran-biocmanager libboost-all-dev python3 git && apt-get clean
RUN R ../installer.R
ADD ../triplex_wrapper /opt/triplex_wrapper.r
ENTRYPOINT ["/opt/triplex_wrapper.r"]