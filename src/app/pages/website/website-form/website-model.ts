export default class WebsitesModel {
  public action: string;
  public page_name: string;
  public section_name: string;
  public section_title: string;
  public section_content: string;
  public section_content_fr: string;
  public section_need_editor:string;
  constructor(websites: any = {}) {

    this.page_name = websites.page_name || "";
    this.action = websites.action || "";
    this.section_name = websites.section_name || "";
    this.section_title = websites.section_title || "";
    this.section_content = websites.section_content || "";
    this.section_content_fr = websites.section_content_fr || "";
    this.section_need_editor = websites.section_need_editor || "";
  }


}
