declare namespace TSResume {
  /**
   * @description 基本信息
   */
  export interface Base {
    /**
     * @description 头像
     */
    avatar?: string;
    /**
     * @description 姓名
     */
    username: string;
    /**
     * @description 地区
     */
    area?: string;
    /**
     * @description 学校
     */
    school?: string;
    /**
     * @description 学年
     */
    onSchoolTime?: {
      /**
       * @description 入校时间
       */
      beginTime: number;
      /**
       * @description 离校时间
       */
      endTime: number;
    };
    /**
     * @description 专业
     */
    major?: string;
    /**
     * @description 学位
     */
    degree?: string;
    /**
     * @description 籍贯
     */
    hometown?: string;
    /**
     * @description 政治面貌
     */
    political?: string;
  }

  /**
   * @description 联系方式
   */
  export interface Contact {
    /**
     * @description 电话号码
     */
    phone?: string;
    /**
     * @description 邮箱
     */
    email?: string;
    /**
     * @description github
     */
    github?: string;
    /**
     * @description 掘金
     */
    juejin?: string;
  }

  /**
   * @description 求职信息
   */
  export interface Work {
    /**
     * @description 意愿岗位
     */
    job?: string;
    /**
     * @description 意愿城市
     */
    city?: string[];
  }

  /**
   * @description 在校经验
   */
  export interface SchoolExperience extends Experience {
    /**
     * @description 部门
     */
    department?: string;
    /**
     * @description 职位
     */
    post?: string;
  }

  /**
   * @description 在校经验
   */
  export interface WorkExperience extends Experience {
    /**
     * @description 部门
     */
    department?: string;
    /**
     * @description 职位
     */
    post?: string;
  }

  /**
   * @description 在校经验
   */
  export interface ProjectExperience extends Experience {
    /**
     * @description 项目名
     */
    projectName?: string;
    /**
     * @description 职位
     */
    post?: string;
  }

  /**
   * @description 经验
   */
  interface Experience {
    /**
     * @description 开始时间
     */
    beginTime?: number;
    /**
     * @description 结束时间
     */
    endTime?: number;
    /**
     * @description 主要工作
     */
    content?: string[];
    /**
     * @description 额外补充内容
     */
    supplement?: string;
  }

  /**
   * @description 一份完整的简历信息
   */
  export interface IntactResume {
    base: Base;
    skill: string[];
    hobby: string;
    evaluation: string[];
    contact: Contact;
    work: Work;
    workExperience?: WorkExperience[];
    schoolExperience?: SchoolExperience[];
    projectExperience?: ProjectExperience[];
  }

  /**
   * @description 简历模版
   */
  export interface TemplateItem {
    /**
     * @description 唯一标识
     */
    id: string;
    /**
     * @description 模版名
     */
    name: string;
    /**
     * @description 模版封面
     */
    cover: string;
  }

  /**
   * @description 简历工具条模块
   */
  export interface SliderItem {
    /**
     * @description 唯一标识
     */
    key: string;
    /**
     * @description 模块名
     */
    name: string;
    /**
     * @description 描述
     */
    summary: string;
    /**
     * @description 是否必须
     */
    require: boolean;
  }
}
