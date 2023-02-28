#!/usr/bin/env Rscript
suppressMessages(library(TriplexAligner))

lncRnaFasta <- commandArgs(trailingOnly = TRUE)[2]
dnaFasta <- commandArgs(trailingOnly = TRUE)[1]

if (is.na(dnaFasta)){
    print("Input missing - first argument is path to input file for dna fasta")
    quit(status = 1)
}
if (is.na(lncRnaFasta)){
    print("Input missing - second argument is path to input file for rna fasta")
    quit(status = 1)
}

sink(stderr())
output <- TriplexAligner(rna_input = lncRnaFasta, dna_input = dnaFasta, rna_format = 'fasta', dna_format = 'fasta', species = 'hs')
sink()
write.table(output, col.names = TRUE, row.names =FALSE, quote = FALSE, file="", sep="\t")
