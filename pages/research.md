---
layout: page-fullwidth
title: "Research"
meta_title: ""
subheadline: ""
teaser: ""
permalink: "/research/"
header:
    image_fullwidth: "genvis-dna-bg_optimized_v1a.png"
---

## Overview

The Griffith lab is a combined research group driven by the interests of twin scientists [Malachi Griffith](http://malachigriffith.org/) and [Obi Griffith](http://obigriffith.org/). The focus of the lab is on developing methods of applied bioinformatics for personalized medicine and improved cancer care.

Our research is committed to development of open access and open source resources for cancer genome analysis. Research projects cover a wide spectrum of cancer informatics and clinical statistics with an emphasis on translation and application. Specifically, we use computational methods for the analysis of large cancer datasets at the molecular level (DNA, RNA and protein) to identify markers for diagnosis, prognosis and drug response prediction in cancer. We have contributed to the early development of methods for analysis of transcriptional regulation (ORegAnno) and RNA-seq analysis and visualization (Alexa Platform).

The group is engaged in a large number of tumor sequencing projects for AML, breast, liver, lung, and other cancers, investigating primary, relapse and drug resistant tumors. To this end we have worked with others at the [McDonnell Genome Institute](http://genome.wustl.edu/) to develop end-to-end pipelines for clinical cancer sequencing that automate state-of-the-art methods for sequence alignment, somatic variation detection, RNA sequence analysis, and the integration of these data types into user-friendly reports of the most clinically relevant genome and transcriptome changes in a tumor or cohort of tumors ([Genome Modeling System](https://github.com/genome/gms/wiki)). To aid in this effort our group has developed software, databases, knowledgebases, and web tools for interrogation of the druggable genome ([DGIdb](http://dgidb.org/)), identification of cancer driver mutations ([DoCM](http://docm.info/)), interpretation of clinically actionable variants in cancer ([CIViC](http://civicdb.org)), and genomic visualization ([GenVisR](https://bioconductor.org/packages/release/bioc/html/GenVisR.html)). The group is also actively involved in the identification and scoring of tumor neoantigens and development of related software for design of human cancer vaccines ([pVACtools](http://pvactools.org)).

In addition to our basic and clinical research interests, we are also passionate about the scholarship of teaching and learning. We have made substantial contributions to the training and education of tomorrow's bioinformaticians through our involvement in [CBW](https://bioinformatics.ca/), [CSHL](http://meetings.cshl.edu/courses.aspx?course=C-SEQTEC&year=18) workshops and the [BioStars](https://www.biostars.org/) forum. We have developed online courses for [RNA sequence analysis](http://rnaseq.wiki) and [Genomic Visualization in R](http://genviz.org). We are currently developing a bioinformatics and clinical informatics training program that takes a practical, hands-on approach to cancer genome analysis for personalized medicine.

## Research Projects

{% include project 
  title="Genomic analysis of the Stat1-/- mouse model of ER+ breast cancer" 

  description="ER+ luminal tumors are the most frequent subtype of breast cancer. Stat1−/− mice develop mammary tumors that closely resemble this cancer subtype. To identify transforming events that contribute to tumorigenesis, we performed whole genome sequencing of Stat1−/− primary mammary tumors and matched normal tissues. This investigation identified somatic truncating mutations affecting the prolactin receptor (Prlr) in all tumor samples. Targeted sequencing confirmed the presence of these mutations in precancerous lesions, indicating this is an early event in tumorigenesis. Functional evaluation showed that co-expression of truncated and wild type Prlr led to aberrant Stat3 and Stat5 activation downstream of the receptor, cellular transformation in vitro and tumor formation in vivo." 

  team="Obi Griffith, Malachi Griffith, Kilannin Krysiak, Zachary Skidmore, Jasreet Hundal, Lee Trani" 

  image="/assets/img/research/Stat1_slider_image.png" 

  citation="Griffith et al. 2016. Truncating Prolactin Receptor Mutations Promote Tumor Growth in Murine Estrogen Receptor-Alpha Mammary Carcinomas. Cell Reports. 17(1):249-60." 

  pmid="27681435" 
%}

{% include project
  title="A genomic case study of mixed fibrolamellar hepatocellular carcinoma"

  description="We report the first comprehensive genomic analysis of a case of Mixed fibrolamellar hepatocellular carcinoma (mFL-HCC). No common HCC-associated mutations were identified. The very low mutation rate of this case, large number of mostly single-copy, long-range copy number variants, and high expression of ERBB2 were more consistent with previous reports of pure FL-HCC than conventional HCC. In particular, the DNAJB1:PRKACA fusion transcript specifically associated with pure FL-HCC was detected at very high expression levels. Subsequent analysis revealed the presence of this fusion in all primary and metastatic samples, including those with mixed or conventional HCC pathology. A second case of mFL-HCC confirmed our finding that the fusion was detectable in conventional components. An expanded screen identified a third case of fusion-positive HCC, which upon review, also had both conventional and fibrolamellar features. This screen confirmed the absence of the fusion in all conventional HCC and adjacent non-tumor liver samples. These results indicate that mFL-HCC is similar to pure FL-HCC at the genomic level and the DNAJB1:PRKACA fusion can be used as a diagnostic tool for both pure and mFL-HCC."

  team="Obi Griffith, Malachi Griffith, Kilannin Krysiak, Avinash Ramu, Zachary Skidmore, Jason Kunisaki"

  image="/assets/img/research/HCC32_circos.png"

  citation="Griffith et al. 2016. A genomic case study of mixed fibrolamellar hepatocellular carcinoma. Annals of Oncology. 27(6):1148-54."

  pmid="27029710"
%}

