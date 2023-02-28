FROM debian
MAINTAINER Ivan Molineris <ivan.molineris@unito.it>

ENV LANG=C LC_ALL=C
RUN apt-get update && apt-get install r-base r-cran-devtools r-cran-biocmanager libboost-all-dev python3 git && apt-get clean
WORKDIR /tmp
RUN devtools::install_github(repo = 'SchulzLab/TriplexAligner', repos = BiocManager::repositories(), dependencies = T)
ADD ../triplex_wrapper /opt/triplex_wrapper.r
ENTRYPOINT ["/opt/triplex_wrapper.r"]