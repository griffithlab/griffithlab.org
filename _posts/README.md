# New Markdown file format

##

* ```title```: paper/project title **"Required"**
* ```short_title```: one word short decription **"Required"**
* ```tags```: what publication catgeory does the project belong to (Backscatter/Wireless Sensign etc, check publication webpage) **"Required"**
* ```cover```: cover image to display iff there is no video. If there is video, the main display will have the video instead.
* ```authors```: string list of all authors, this is needed for publications/ where a short string describes authors. **"Required"**
* ```author_list```: a nested YAML variable to help render the new template **Not Required, but recommended**
  - ```name```: needed, include a ```*``` if need to show equal contribution
  - ```url```: optional
  - ```enail```: needed
* ```eqcon```: set to ```true``` if there is equal contrib in the author list **Not Required, but recommended**
* ```conference```: string describing conference/journal/workshop etc **Required**
* ```conference_site```: url for the conference/journal/workshop etc **Not Required, but recommended**
* ```paper```: url linking to paper pdf **Required**
* ```video```: url linking to video **Not Required, but recommended**, Although it says video, its just a hyperlink and can point to slides pdf as well
* ```video_str```: video text decription (is it demo? talk? pitch?) **Not Required** if this is not supplied, but video url is included, the text rendered would be simply "Video"
* ```miscs```: a nested YAML variable to add any more links  **Not Required, but recommended**
  -  ```content_type```: what is the content? (is it demo? talk? pitch? proof? suppl. material?)
  - ```content_url```: url to point to the content
* ```description```: a nested YAML variable to add any extra description  **Not Required, but recommended**
  - ```title```: string to describe the content (eg. Key Idea, Contribution, What is purpose of project etc)
  - ```text```: wall of text as a string to describe the title
  - ```image```: image to add to the content block
  - ```image_width```: in px, if not supplied default width is 600 px
For description, all the three are optional, in the sense that content block can be just title+image, title+text, text+image, only image, only text etc this all is flexible
* ```medias```: a nested YAML variable to add media coverage **Not Required, but recommended**
  -  ```type```: where is it published? (Techcrunch/HAckstter, or any description you would want)
  - ```url```: url to point to the content
* ```citation```: a nested YAML variable to add citation block towards the end **Not Required, but recommended**
  - ```text```: bibtext/short cite text for the paper
  - ```thumbnail```: any thumbnail you would want to include
  - ```bib```: **Not working right now, Ignore**
  - ```biburl```: url pointing to bibtext
  - ```links```: Nested YAML paramater to add any extra links (Arxiv version, slides etc etc)

