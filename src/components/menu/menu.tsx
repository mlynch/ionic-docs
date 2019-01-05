import { Component } from '@stencil/core';
import Logo from '../header/logo';
import apiTemplate from './templates/api';
import cliTemplate from './templates/cli';
import nativeTemplate from './templates/native';
import mainTemplate from './templates/main';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  render() {
    return [
      <header>
        <stencil-route-link url="/docs/">
          <Logo/>
        </stencil-route-link>
      </header>,
      <docs-search/>,
      <stencil-route-switch>
        <stencil-route url="/docs/api" routeRender={apiTemplate}/>
        <stencil-route url="/docs/cli" routeRender={cliTemplate}/>
        <stencil-route url="/docs/native" routeRender={nativeTemplate}/>
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>
    ];
  }
}