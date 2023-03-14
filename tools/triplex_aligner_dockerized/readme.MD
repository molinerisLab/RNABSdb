## Create container image

`docker build -t triplex_aligner .`

## Script usage

`docker run --rm -v $PWD:$PWD triplex_aligner $PWD/example_fasta/dnaInput.fa $PWD/example_fasta/lncRna.fa hs`

- Input files are to be given in the form `$PWD/{relative_path}`
- Last argument must be `hs` for human or `mm` for mouse 
