---
layout: page-fullwidth
title: "Principles"
meta_title: ""
subheadline: ""
teaser: ""
permalink: "/principles/"
header:
  image: "VICC_color_combo_v2.png"
  background-color: "#18252B"
---

## Background

The paradigm of precision medicine envisions a future in which a patient’s molecular information can be interpreted in the context of accumulated worldwide knowledge to inform diagnosis, prognosis and treatment options most likely to benefit that individual patient. Although patients with any genetic disease would likely benefit from such molecularly-guided treatment options, cancer precision medicine currently serves as the forerunner of this paradigm, with recent studies demonstrating that molecular testing can inform treatments. Accordingly, a number of groups – including those from the commercial, governmental, and academic sectors – have created knowledgebases to annotate cancer genomic mutations associated with evidence of pathogenicity or relevant treatment options. However, in practice, clinicians and researchers are currently unable to effectively utilize the accumulated knowledge derived from such efforts. Integration of the available knowledge is infeasible because each institution (often redundantly) curates their own knowledgebase with limited adherence to any interoperability standards, contributing to a persistent interpretation bottleneck. Commercial entities and some academic entities offer only proprietary or otherwise limited-access databases. Using a single knowledgebase presents several disadvantages: (1) important mutations may be missed or require additional manual curation at the time of assay; (2) some mutations may be incorrectly interpreted based on partial knowledge from the literature; and (3) interpretation conflicts between different health providers may arise if they utilize different resources. Therefore, there is a clear need to standardize and coordinate clinical-genomics curation efforts across institutions, and create a public community resource able to query the aggregated information. 

Here, we bring together several of the leading institutions who are independently developing comprehensive cancer clinical genomics databases. These groups share a desire to coordinate efforts to achieve an integrated resource that would dramatically enhance the value of each independent effort. Our ultimate goal is to create a federated query service able to interrogate associations between cancer gene alterations and clinical actions, for each disease setting, based on evidence amassed from all participating institutions world-wide.

The Global Alliance for Genomic Health (GA4GH) has worked over the past several years to create the data and application programming interface (API) standards to facilitate such integration, and prototyped cancer clinical genomics implementations conforming to GA4GH standards with multiple groups. The GA4GH hosted a meeting in April, 2016 to engage stakeholders. During this meeting, several groups who were already working on creating cancer clinical genomics resources expressed a desire to integrate their efforts, and developed a preliminary set of recommendations. The group agreed to form the Variant Interpretation for Cancer Consortium (VICC) with the following guiding principles and requirements for participation:

## VICC Guiding Principles

- While each individual knowledgebase will likely continue to exist to service the specific needs of each institution, there is clear value and necessity in sharing knowledge of cancer type-variant-drug associations. Such sharing will increase confidence where interpretations overlap, fill gaps, reduce redundancy, and leverage disparate domain expertise.
- A minimal set of data elements for sharing interpretations is required. Each institute will commit to including at least these minimal elements in their curation data model.
- Each institute will share all or a significant proportion of interpretations (with at least the minimal required data elements) accumulated by their current curation efforts. This will require releasing content under permissive licenses (free and non-exclusive for at least research use) and providing documented public APIs for data access.
- Building on software developed for independent efforts will be critical to create a community resource. Therefore, software will be released in public repositories with open source licenses.
- To avoid patient data privacy concerns, the project will focus initially on clinical interpretations derived from published findings (literature, conference proceedings, and clinical trial records), not individual patient/variant-level observations.
- Data sharing will be facilitated by use of the GA4GH genotype-to-phenotype (G2P) schemas, APIs and demonstration implementations.
- The VICC will make available bulk downloads of all cross-knowledgebase interpretations to facilitate data mining.

