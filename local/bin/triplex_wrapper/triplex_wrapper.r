#!/usr/bin/env Rscript

# resources
suppressMessages(library(TriplexAligner))

# get all arguments
lncRnaFasta <- commandArgs(trailingOnly = TRUE)[2]
dnaFasta <- commandArgs(trailingOnly = TRUE)[1]
species <- commandArgs(trailingOnly = TRUE)[3]

# check arguments
if (is.na(dnaFasta)){
    print("Input missing - first argument is path to input file for dna fasta")
    quit(status = 1)
}
if (is.na(lncRnaFasta)){
    print("Input missing - second argument is path to input file for rna fasta")
    quit(status = 1)
}
if (is.na(species)){
    print("Input missing - third argument is species [ hs | mm ]")
    quit(status = 1)
} else if(!species%in%c("hs","mm")){
    print("Wrong input - third argument is species [ hs | mm ]")
    quit(status = 1)
}
    
# run triplexAligner
sink(stderr())
output <- TriplexAligner(rna_input = lncRnaFasta,
                         dna_input = dnaFasta,
                         rna_format = 'fasta',
                         dna_format = 'fasta', 
                         species = species)
sink()

# save output table
write.table(output, file="", col.names = TRUE, row.names =FALSE, quote = FALSE, sep="\t")
