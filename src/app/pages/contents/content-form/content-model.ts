export default class ContentsModel {
  public web_id: string;
  public action: string;
  public page_name: string;
  public section_name: string;
  public section_title: string;
  public section_title_fr: string;
  public section_content: string;
  public section_content_fr: string;
  public section_image: string;
  public need_editor:string;
  public need_image_upload:string;
  public need_image_upload_only:string;
  constructor(contents: any = {}) {
    this.web_id = contents.web_id || "";
    this.action = contents.action || "";
    this.page_name = contents.page_name || "";
    this.section_name = contents.section_name || "";
    this.section_title = contents.section_title || "";
    this.section_title_fr = contents.section_title_fr || "";
    this.section_content = contents.section_content || "";
    this.section_content_fr = contents.section_content_fr || "";
    this.section_image = contents.section_image || "";
    this.need_editor = contents.need_editor || "";
    this.need_image_upload = contents.need_image_upload || "";
    this.need_image_upload_only = contents.need_image_upload_only || "";
  }


}
