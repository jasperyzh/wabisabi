!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function l(t){try{d(n.next(t))}catch(t){r(t)}}function u(t){try{d(n.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,u)}d((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=o(1),r=o(2);let l=!1,u=!1,d={};function a(){return n(this,void 0,void 0,(function*(){l=yield i.default.settings.value("showFolders"),l&&(yield function t(){return n(this,void 0,void 0,(function*(){d=yield function(){return n(this,void 0,void 0,(function*(){let t={};const e={fields:["id","title"],page:1};let o=yield i.default.data.get(["folders"],e);for(o.items.forEach(e=>t[e.id]=e.title);o.has_more;)e.page+=1,o=yield i.default.data.get(["folders"],e),o.items.forEach(e=>t[e.id]=e.title);return t}))}(),setTimeout(()=>{l&&t()},6e4)}))}())}))}function s(){return n(this,void 0,void 0,(function*(){u=yield i.default.settings.value("allowNewNotes")}))}i.default.plugins.register({onStart:function(){return n(this,void 0,void 0,(function*(){yield function(){return n(this,void 0,void 0,(function*(){yield i.default.settings.registerSection("QuickLinks",{description:"Quick Links Plugin Settings",label:"Quick Links",iconName:"fas fa-link"}),yield i.default.settings.registerSettings({showFolders:{public:!0,section:"QuickLinks",type:r.SettingItemType.Bool,value:l,label:"Show Notebooks"},allowNewNotes:{public:!0,section:"QuickLinks",type:r.SettingItemType.Bool,value:u,label:"Allow new Notes"}}),yield a(),yield s(),yield i.default.settings.onChange(t=>{t.keys.indexOf("showFolders")>=0&&a();t.keys.indexOf("allowNewNotes")>=0&&s()})}))}(),yield i.default.contentScripts.register(r.ContentScriptType.CodeMirrorPlugin,"quickLinks","./QuickLinksPlugin.js"),yield i.default.contentScripts.onMessage("quickLinks",t=>n(this,void 0,void 0,(function*(){const e=(yield i.default.workspace.selectedNoteIds())[0];if("getNotes"===t.command){const o=t.prefix;return{notes:(yield function(t){return n(this,void 0,void 0,(function*(){if(""===t){return(yield i.default.data.get(["notes"],{fields:["id","title","parent_id"],order_by:"updated_time",order_dir:"DESC",limit:21})).items}return(yield i.default.data.get(["search"],{fields:["id","title","parent_id"],limit:21,query:`title:${t.trimRight()}*`})).items}))}(o)).filter(t=>t.id!==e).map(t=>({id:t.id,title:t.title,folder:d[t.parent_id]})),showFolders:l,allowNewNotes:u}}if("createNote"===t.command){const e=yield i.default.workspace.selectedNote(),o=yield i.default.data.get(["folders",e.parent_id]);return{newNote:yield i.default.data.post(["notes"],null,{is_todo:t.todo,title:t.title,parent_id:o.id})}}})))}))}})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=joplin},function(t,e,o){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.ContentScriptType=e.SettingItemType=e.ToolbarButtonLocation=e.isContextMenuItemLocation=e.MenuItemLocation=e.ImportModuleOutputFormat=e.FileSystemItem=void 0,function(t){t.File="file",t.Directory="directory"}(e.FileSystemItem||(e.FileSystemItem={})),function(t){t.Markdown="md",t.Html="html"}(e.ImportModuleOutputFormat||(e.ImportModuleOutputFormat={})),function(t){t.File="file",t.Edit="edit",t.View="view",t.Note="note",t.Tools="tools",t.Help="help",t.Context="context",t.NoteListContextMenu="noteListContextMenu",t.EditorContextMenu="editorContextMenu",t.FolderContextMenu="folderContextMenu",t.TagContextMenu="tagContextMenu"}(n=e.MenuItemLocation||(e.MenuItemLocation={})),e.isContextMenuItemLocation=function(t){return[n.Context,n.NoteListContextMenu,n.EditorContextMenu,n.FolderContextMenu,n.TagContextMenu].includes(t)},function(t){t.NoteToolbar="noteToolbar",t.EditorToolbar="editorToolbar"}(e.ToolbarButtonLocation||(e.ToolbarButtonLocation={})),function(t){t[t.Int=1]="Int",t[t.String=2]="String",t[t.Bool=3]="Bool",t[t.Array=4]="Array",t[t.Object=5]="Object",t[t.Button=6]="Button"}(e.SettingItemType||(e.SettingItemType={})),function(t){t.MarkdownItPlugin="markdownItPlugin",t.CodeMirrorPlugin="codeMirrorPlugin"}(e.ContentScriptType||(e.ContentScriptType={}))}]);