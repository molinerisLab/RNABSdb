
Data:
>longest_transcripts.fa  
(lncRNA_transcripts.longest.fa)
    -Genome hsapiens - versione 32 - GRCh38
    -Genome mouse Mouse GRCm38 - versione M25 - 
    >Keys: "nomi" gene 

>repeat_rmsk.repClass.bed.gz
    File con repeats annotati (LINE..)

>basic.annotation.exon.longest_transcript.db
    >Db con coordinate genomiche degli esoni del trascritto + lungo
    di ogni gene (va mantenuto x genoma umano e topo)
    >

>examples/const_test  :> Coordinate con punteggio conservazione x ogni lncRNA

>% fold -> calcolata in rt RNAplfold 
    (esempio ingleStrandness_test.header_added)
    -Forse cache


Plottare
>N. luoghi legame (o punteggio stabilità interazine?) per ogni nucleotide
    ->Questo ancora non sappiamo dove prenderlo
    Dentro 3plex: get_tts_profile 
>% legame (fold)
    -> Calcolato con RNAplfold
    -> Forse faremo caching
>Profilo Conservazione
    -> Li pigliamo da:
        hg38.phastCons30way.bw:
        wget -O $@ http://hgdownload.soe.ucsc.edu/goldenPath/hg38/phastCons30way/hg38.phastCons30way.bw

        mm10.60way.phastCons.bw:
        wget -O $@ http://hgdownload.soe.ucsc.edu/goldenPath/mm10/phastCons60way/mm10.60way.phastCons.bw
    -> formato big w 
    ->Script per leggere e parsificare file:
        /mnt/rsnapshot_uv2000/daily.0/uv2000/sto1/epigen/DBD_profiles/conservation/dataset/v1/getPhastCons.py
        ->Crea come output file nella forma examples/const_test con posizione -> punteggio

>repeats presenti
    -> repeat_rmsk.repClass.bed.gz
    -> get_repeat
    -> 1: retrieve all repeat classes associated 
    -> 2: iterate on all repeats 