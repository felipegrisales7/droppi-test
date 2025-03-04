import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebComponent from 'react-to-webcomponent'
import App from './App.jsx'

const MyAppElement = reactToWebComponent(App, React, ReactDOM)

customElements.define('my-app-element', MyAppElement)
