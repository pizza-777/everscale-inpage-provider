import './style.css';

import DefaultTheme from 'vitepress/theme';
import ClassComponent from './../components/class/Class.vue';
import ConstructorComponent from './../components/class/components/Constructor.vue';
import AccessorComponent from './../components/class/components/Accessor.vue';
import MethodComponent from './../components/class/components/Method.vue';
import PropertyComponent from './../components/class/components/Property.vue';
import TypeAliasComponent from './../components/type-alias/TypeAlias.vue';
import InterfaceComponent from './../components/interface/Interface.vue';
import FunctionComponent from './../components/function/Function.vue';
import TableOfContentComponent from './../components/shared/TableOfContent.vue';
import PropertyTableComponent from './../components/shared/PropertyTable.vue';
import DefinedInLinkComponent from './../components/shared/DefinedInLink.vue';
import ComponentSwitcher from './../components/component-switcher/ComponentSwitcher.vue';
import PageContentComponent from './../components/page-content/PageContent.vue';
import AnchorLinkComponent from './../components/shared/AnchorLink.vue';
import ArrowComponent from './../components/shared/Arrow.vue';
// import TypeRendererComponent from './../components/shared/type/components/TypeRenderer.vue';
// import ArrayTypeComponent from './../components/shared/type/components/ArrayType.vue';
import GetProviderStateComponent from './../components/demo/GetProviderState.vue';
import PackCellComponent from './../components/snippets/PackCell.vue';
import UnpackCellComponent from './../components/snippets/UnpackCell.vue';
import GetBocHashComponent from './../components/snippets/GetBocHash.vue';
//import SendExternalMessageComponent from './../components/snippets/SendExternalMessage.vue';
// import SnippetComponent from './../components/shared/Snippet.vue';
// import CodeBlockComponent from './../components/shared/CodeBlock.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp({ app });
    app.component('ClassComponent', ClassComponent);
    app.component('ConstructorComponent', ConstructorComponent);
    app.component('AccessorComponent', AccessorComponent);
    app.component('MethodComponent', MethodComponent);
    app.component('PropertyComponent', PropertyComponent);
    app.component('TypeAliasComponent', TypeAliasComponent);
    app.component('InterfaceComponent', InterfaceComponent);
    app.component('FunctionComponent', FunctionComponent);
    app.component('TableOfContentComponent', TableOfContentComponent);
    app.component('PropertyTableComponent', PropertyTableComponent);
    app.component('DefinedInLinkComponent', DefinedInLinkComponent);
    app.component('ComponentSwitcher', ComponentSwitcher);
    app.component('PageContentComponent', PageContentComponent);
    app.component('LinkComponent', AnchorLinkComponent);
    app.component('ArrowComponent', ArrowComponent);
    // app.component('TypeRendererComponent', TypeRendererComponent);
    // app.component('ArrayTypeComponent', ArrayTypeComponent);
    app.component('GetProviderStateComponent', GetProviderStateComponent);
    app.component('PackCellComponent', PackCellComponent);
    app.component('UnpackCellComponent', UnpackCellComponent);
    app.component('GetBocHashComponent', GetBocHashComponent);

    // app.component('SnippetComponent', SnippetComponent);
    // app.component('CodeBlockComponent', CodeBlockComponent);
    //app.component('SendExternalMessageComponent', SendExternalMessageComponent);
  },
};
