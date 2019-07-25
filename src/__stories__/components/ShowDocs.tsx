/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import { RenderContext } from 'vue';
import { ofType } from 'vue-tsx-support';

export interface DocsProps {
  md: { default: string };
}

const ShowDocs = ({ props }: RenderContext<DocsProps>) => (
  <div class="markdown-body" domPropsInnerHTML={props.md.default} />
);

// @ts-ignore
export default ofType<DocsProps>().convert(ShowDocs);
