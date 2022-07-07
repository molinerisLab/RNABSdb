---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

This website aims to collect all publically available hi-throughput data about lncRNAs binding on genomes.
Including mostly ChIRP-seq experiments but also CHART-seq, RAP-seq, ChOP-seq, ASO-Caputre-Seq, TRIP-seq, MARGI-seq, GRID-seq, RADICL-seq and ChAR-seq.

## How to cite

If you use some dada provided by `RNABSdb` please cite 

__RNABSdb and 3plex enable deep computational investigation of triplex forming lncRNAs__
<br>
Chiara Cicconetti, Andrea Lauria, Valentina Proserpio, Annalaura Tamburrini, Mara Maldotti, Salvatore Oliviero, Ivan Molineris
<br>
_bioRxiv 2022.07.06.496678_; doi: [https://doi.org/10.1101/2022.07.06.496678](https://www.biorxiv.org/content/10.1101/2022.07.06.496678v1)

Moreover you can find in the [experiment table](experiments_table) the reference to each original article describing the data we collected. Please cite the ones relevant to your works alongisde `RNABSdb` paper.

## Experiments Table
View the list of [collected experiments](experiments_table).

## Submit your data

#### Published data

Tell us how to find the data using the [add an experiment form](#add_an_experiment)

#### Unpublished or private data

We process your data for free on a collaborative basis for academic-non profit use. Please [contact us](analyze) if interested.

## Re-processed data

We re-analyze all data in standard ad uniform way using [ENCODE ChIP-seq pipeline](https://www.encodeproject.org/chip-seq/transcription_factor/).

### View peaks and signal trask on genome browser

[Human genome](https://genome.ucsc.edu/cgi-bin/hgTracks?hubUrl=https://olilab.unito.it/RNABSdb/hub.txt&genome=hg38&position=lastDbPos)

[Mouse genome](https://genome.ucsc.edu/cgi-bin/hgTracks?hubUrl=https://olilab.unito.it/RNABSdb/hub.txt&genome=mm10&position=lastDbPos)

### Download data in bed and bigwig format

[collected experiments](download_data)


### Add an experiment
<a name="add_an_experiment"></a>
Have you found public experimental data regarding the binding of RNA on the genome? Is it not yet in *RNABSdb*? Please let us know and we will update the database!

{% include new_public_data_form.html %}

If you want to help us better organize the data please go to the [full Google form](https://docs.google.com/forms/d/e/1FAIpQLSdKV6HKGrhoiFCRUoUkID0PG_gKEpH_VOkvyUsBLRBpXj2u_g/viewform?usp=sf_link), no email or registration required, all fields are optionals. Thanks!


------------
[Edit this page](https://github.com/molinerisLab/RNABSdb/edit/gh-pages/index.md).
