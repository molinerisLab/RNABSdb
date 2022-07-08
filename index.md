---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

RNABSdb is a collection of all the publicly available high-throughput RNA-DNA interaction data.
Considered experimental procedures are ChIRP-seq, CHART-seq, RAP-seq, ChOP-seq, ASO-Caputre-Seq, MARGI-seq, GRID-seq, RADICL-seq and ChAR-seq.

## How to cite

If you use data provided by `RNABSdb` please cite 

__RNABSdb and 3plex enable deep computational investigation of triplex forming lncRNAs__
<br>
Chiara Cicconetti, Andrea Lauria, Valentina Proserpio, Annalaura Tamburrini, Mara Maldotti, Salvatore Oliviero, Ivan Molineris
<br>
_bioRxiv 2022.07.06.496678_; doi: [https://doi.org/10.1101/2022.07.06.496678](https://www.biorxiv.org/content/10.1101/2022.07.06.496678v1)

You can find in the [experiment table](experiments_table) the reference to each original article describing the collected data. Please cite them alongside `RNABSdb` paper.

## Experiments Table
View the list of [collected experiments](experiments_table).

## Submit your data

#### Published data

Tell us how to find new data using the [add an experiment form](#add_an_experiment)

#### Unpublished or private data

We process your data for free on a collaborative basis for academic-nonprofit use. Please [contact us](analyze) if interested.

## Re-processed data

We reanalyze the data in a standard ad uniform way employing [ENCODE ChIP-seq pipeline](https://www.encodeproject.org/chip-seq/transcription_factor/).

### View peaks and signal tracks on genome browser

[Human genome](https://genome.ucsc.edu/cgi-bin/hgTracks?hubUrl=https://olilab.unito.it/RNABSdb/hub.txt&genome=hg38&position=lastDbPos)

[Mouse genome](https://genome.ucsc.edu/cgi-bin/hgTracks?hubUrl=https://olilab.unito.it/RNABSdb/hub.txt&genome=mm10&position=lastDbPos)

### Download data in bed and bigwig format

[collected experiments](download_data)


### Add an experiment
<a name="add_an_experiment"></a>
Have you found published RNA genomic binding sites not yet included in *RNABSdb*? Let us know, we will update the database!

{% include new_public_data_form.html %}

If you want to help us better organize the data please go to the [full Google form](https://docs.google.com/forms/d/e/1FAIpQLSdKV6HKGrhoiFCRUoUkID0PG_gKEpH_VOkvyUsBLRBpXj2u_g/viewform?usp=sf_link), no email or registration required, all fields are optionals. Thanks!


------------
[Edit this page](https://github.com/molinerisLab/RNABSdb/edit/gh-pages/index.md).
