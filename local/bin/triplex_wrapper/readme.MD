## Create container image
* build -t triplex_wrapper .

## Use script
* docker run --rm --rm -v $PWD:$PWD triplex_wrapper $PWD/example_fasta/dnaInput.fa $PWD/example_fasta/lncRna.fa
* input files are to be given in the form $PWD/{relative_path}
