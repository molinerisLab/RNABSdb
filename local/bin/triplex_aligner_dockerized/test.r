#!/usr/bin/env Rscript
# resources
suppressMessages(library(TriplexAligner))

output_fasta <- TriplexAligner(rna_input = "/home/epigen/TPXcCRE/dataset/v8.2_ReChIRP_idr_cons/test_RNA.fa",
                               dna_input = "/home/epigen/TPXcCRE/dataset/v8.2_ReChIRP_idr_cons/test_DNA.fa",
                               rna_format = "fasta",
                               dna_format = "fasta",
                               species = "hs")

# save output table
write.table(output_fasta, file="", col.names = TRUE, row.names =FALSE, quote = FALSE, sep="\t")
