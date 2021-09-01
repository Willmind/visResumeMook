// renderer/common/types/template.d.ts

declare namespace TSTemplate {
    export interface Item {
        /**
         * @description 模版id
         */
        templateId: string;
        /**
         * @description 模版名称
         */
        templateName: string;
        /**
         * @description 模版封面
         */
        templateCover: string;
    }
}