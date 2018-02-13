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

<div data-magellan-expedition="fixed">
  <ul class="sub-nav">
    <li data-magellan-arrival="Overview"><a href="#Overview">Overview</a></li>
    <li data-magellan-arrival="Breast_cancer_genomics"><a href="#Breast_cancer_genomics">Breast cancer</a></li>
    <li data-magellan-arrival="Liver_cancer_genomics"><a href="#Liver_cancer_genomics">Liver cancer</a></li>
    <li data-magellan-arrival="Lung_cancer_genomics"><a href="#Lung_cancer_genomics">Lung cancer</a></li>
    <li data-magellan-arrival="Lymphoma_genomics"><a href="#Lymphoma_genomics">Lymphoma</a></li>
    <li data-magellan-arrival="Head_and_neck_cancer_genomics"><a href="#Head_and_neck_cancer_genomics">Head and neck cancer</a></li>
    <li data-magellan-arrival="Immunogenomics"><a href="#Immunogenomics">Immunogenomics</a></li>
    <li data-magellan-arrival="Variant_interpretation"><a href="#Variant_interpretation">Variant interpretation</a></li>
    <li data-magellan-arrival="Precision_medicine"><a href="#Precision_medicine">Precision medicine</a></li>
  </ul>
</div>

<h2 data-magellan-destination="Overview">Overview</h2>
<a name="Overview"></a>

The Griffith lab is a combined research group driven by the interests of twin scientists [Malachi Griffith](http://malachigriffith.org/) and [Obi Griffith](http://obigriffith.org/). The focus of the lab is on developing methods of applied bioinformatics for personalized medicine and improved cancer care.

Our research is committed to development of open access and open source resources for cancer genome analysis. Research projects cover a wide spectrum of cancer informatics and clinical statistics with an emphasis on translation and application. Specifically, we use computational methods for the analysis of large cancer datasets at the molecular level (DNA, RNA and protein) to identify markers for diagnosis, prognosis and drug response prediction in cancer. We have contributed to the early development of methods for analysis of transcriptional regulation (ORegAnno) and RNA-seq analysis and visualization (Alexa Platform).

The group is engaged in a large number of tumor sequencing projects for AML, breast, liver, lung, and other cancers, investigating primary, relapse and drug resistant tumors. To this end we have worked with others at the [McDonnell Genome Institute](http://genome.wustl.edu/) to develop end-to-end pipelines for clinical cancer sequencing that automate state-of-the-art methods for sequence alignment, somatic variation detection, RNA sequence analysis, and the integration of these data types into user-friendly reports of the most clinically relevant genome and transcriptome changes in a tumor or cohort of tumors ([Genome Modeling System](https://github.com/genome/gms/wiki)). To aid in this effort our group has developed software, databases, knowledgebases, and web tools for interrogation of the druggable genome ([DGIdb](http://dgidb.org/)), identification of cancer driver mutations ([DoCM](http://docm.info/)), interpretation of clinically actionable variants in cancer ([CIViC](http://civicdb.org)), and genomic visualization ([GenVisR](https://bioconductor.org/packages/release/bioc/html/GenVisR.html)). The group is also actively involved in the identification and scoring of tumor neoantigens and development of related software for design of human cancer vaccines ([pVACtools](http://pvactools.org)).

In addition to our basic and clinical research interests, we are also passionate about the scholarship of teaching and learning. We have made substantial contributions to the training and education of tomorrow's bioinformaticians through our involvement in [CBW](https://bioinformatics.ca/), [CSHL](http://meetings.cshl.edu/courses.aspx?course=C-SEQTEC&year=18) workshops and the [BioStars](https://www.biostars.org/) forum. We have developed online courses for [RNA sequence analysis](http://rnaseq.wiki) and [Genomic Visualization in R](http://genviz.org). We are currently developing a bioinformatics and clinical informatics training program that takes a practical, hands-on approach to [cancer genome analysis for personalized medicine](https://www.prinformatics.com/course/precision-medicine-bioinformatics-from-raw-genome-and-transcriptome-data-to-clinical-interpretation-pmbi01/) (to be held for the first time this summer in Edinburgh, Scotland).

<hr>

<h2 data-magellan-destination="Breast_cancer_genomics">Breast cancer genomics</h2>
<a name="Breast_cancer_genomics"></a>

{% include project
  title="Genomic analysis of the Stat1-/- mouse model of ER+ breast cancer"

  description="ER+ luminal tumors are the most frequent subtype of breast cancer. Stat1−/− mice develop mammary tumors that closely resemble this cancer subtype. To identify transforming events that contribute to tumorigenesis, we performed whole genome sequencing of Stat1−/− primary mammary tumors and matched normal tissues. This investigation identified somatic truncating mutations affecting the prolactin receptor (Prlr) in all tumor samples. Targeted sequencing confirmed the presence of these mutations in precancerous lesions, indicating this is an early event in tumorigenesis. Functional evaluation showed that co-expression of truncated and wild type Prlr led to aberrant Stat3 and Stat5 activation downstream of the receptor, cellular transformation in vitro and tumor formation in vivo."

  team="Obi Griffith, Malachi Griffith, Kilannin Krysiak, Zachary Skidmore, Jasreet Hundal, Lee Trani"

  image="/assets/img/research/Stat1_slider_image.png"

  citation="Griffith et al. 2016. Truncating Prolactin Receptor Mutations Promote Tumor Growth in Murine Estrogen Receptor-Alpha Mammary Carcinomas. Cell Reports. 17(1):249-60."

  pmid="27681435"
%}

<h2 data-magellan-destination="Liver_cancer_genomics">Liver cancer genomics</h2>
<a name="Liver_cancer_genomics"></a>

{% include project
  title="A genomic case study of mixed fibrolamellar hepatocellular carcinoma"

  description="We report the first comprehensive genomic analysis of a case of Mixed fibrolamellar hepatocellular carcinoma (mFL-HCC). No common HCC-associated mutations were identified. The very low mutation rate of this case, large number of mostly single-copy, long-range copy number variants, and high expression of ERBB2 were more consistent with previous reports of pure FL-HCC than conventional HCC. In particular, the DNAJB1:PRKACA fusion transcript specifically associated with pure FL-HCC was detected at very high expression levels. Subsequent analysis revealed the presence of this fusion in all primary and metastatic samples, including those with mixed or conventional HCC pathology. A second case of mFL-HCC confirmed our finding that the fusion was detectable in conventional components. An expanded screen identified a third case of fusion-positive HCC, which upon review, also had both conventional and fibrolamellar features. This screen confirmed the absence of the fusion in all conventional HCC and adjacent non-tumor liver samples. These results indicate that mFL-HCC is similar to pure FL-HCC at the genomic level and the DNAJB1:PRKACA fusion can be used as a diagnostic tool for both pure and mFL-HCC."

  team="Obi Griffith, Malachi Griffith, Kilannin Krysiak, Avinash Ramu, Zachary Skidmore, Jason Kunisaki"

  image="/assets/img/research/HCC32_circos.png"

  citation="Griffith et al. 2016. A genomic case study of mixed fibrolamellar hepatocellular carcinoma. Annals of Oncology. 27(6):1148-54."

  pmid="27029710"
%}

<h2 data-magellan-destination="Lung_cancer_genomics">Lung cancer genomics</h2>
<a name="Lung_cancer_genomics"></a>
<h2 data-magellan-destination="Lymphoma_genomics">Lymphoma genomics</h2>
<a name="Lymphoma_genomics"></a>
<h2 data-magellan-destination="Head_and_neck_cancer_genomics">Head and neck cancer genomics</h2>
<a name="Head_and_neck_cancer_genomics"></a>

{% include project
  title="Oral cavity squamous cell carcinoma xenografts"

  description="Comprehensive genomic analysis was performed on patient derived xenografts for oral squamous cell carcinomas (OSCC). We found PDX samples were largely correlative with the primary tumors from which they were derived. PDX models were able to retain the heterozygous mutational landscape and clonal architecture of tumors. Somatic differences between the PDX and corresponding OSCC primary samples consited primarily of low-frequency mutations making these xenografts ideal models for exploring OSCC tumor biology."

  team="Katie Campbell, Zachary Skidmore, Erica Barnell, Malachi Griffith, Obi Griffith"

  image="/assets/img/research/oscc_pdx_graphical_abstract.png"

  citation=""

  pmid=""
%}

<h2 data-magellan-destination="Immunogenomics">Immunogenomics</h2>
<a name="Immunogenomics"></a>

{% include project
  title="Neoantigen characterization and personalized cancer vaccine design"

  description="In support of several clinical trials we are creating and applying new immunogenomics tools to help predict response or resistance to checkpoint blockage inhibition therapies and design personalized cancer vaccines."

  team="Jasreet Hundal, Katie Campbell, Yang-Yang Feng, Connor Liu, Joshua McMichael, Susanna Kiwala, Obi Griffith, Malachi Griffith"

  image="/assets/img/research/immunogenomics.png"

  citation="Hundal J, Carreno BM, Petti AA, Linette GP, Griffith OL, Mardis ER, Griffith M. pVAC-Seq: A genome-guided in silico approach to identifying tumor neoantigens. Genome Med. 2016 Jan 29;8(1):11."

  pmid="26825632"
%}


<h2 data-magellan-destination="Variant_interpretation">Variant interpretation</h2>
<a name="Variant_interpretation"></a>
{% include project
  title="Integrating Variant Interpretation Knowledgebases"
%}


<h2 data-magellan-destination="Precision_medicine">Precision medicine</h2>
<a name="Precision_medicine"></a>

{% include project
  title="Genome analysis of relapsed adult ALL case reveals personalized therapeutic strategy"

  description="Extensive genomic analyses were performed in an adult with post-allo relapsed B-ALL. Mutations were found in EP300, NF1, IKZF1, SETD2, RB1, PAX5, NF1, ETV6, and ZNF384. Transcriptome analysis identified aberrant overexpression of the FLT3 gene. Treatment with the FLT3 inhibitor sunitinib induced a rapid clinical and molecular response. This study demonstrates a powerful proof-of-principle that comprehensive genomic studies can sometimes reveal unexpected clinically actionable therapeutic targets."

  team="Malachi Griffith, Obi Griffith, Kilannin Krysiak, Zachary Skidmore, Avinash Ramu, Alex Wagner, Katie Campbell, Robert Lesurf, Jasreet Hundal, Nicholas Spies, Benjamin Ainscough, Jason Walker"

  image="/assets/img/research/ALL1_GraphicalAbstract_neutral.png"
  citation="Griffith et al. 2016. Comprehensive genomic analysis reveals FLT3 activation and a therapeutic strategy for a patient with relapsed adult B-lymphoblastic leukemia. Experimental Hematology. 44(7):603-13."

  pmid="27181063"
%}
