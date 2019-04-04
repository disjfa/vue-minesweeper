# Vue route timeline

[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Instalation

```
npm install vue-minesweeper
```

## Getting started

```javascript
import Vue from 'vue'; // Load vue
import App from './App'; // Load your app
import VueMinesweeper from 'vue-minesweeper';

Vue.use(VueMinesweeper); // Add the game

new Vue({
  render: h => h(App),
}).$mount('#app');
```

## Usage

Add an item whenever you like, it will store the current route:

```html
<minesweeper-game></minesweeper-game>
```

Setup your own grid and bomb

```html
<minesweeper-game :rows="16" :cols="30" :bombs="99"></minesweeper-game>
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://www.disjfa.nl"><img src="https://avatars3.githubusercontent.com/u/632778?v=4" width="100px;" alt="disjfa"/><br /><sub><b>disjfa</b></sub></a><br /><a href="#question-disjfa" title="Answering Questions">💬</a> <a href="#blog-disjfa" title="Blogposts">📝</a> <a href="https://github.com/disjfa/vue-minesweeper/commits?author=disjfa" title="Code">💻</a> <a href="https://github.com/disjfa/vue-minesweeper/commits?author=disjfa" title="Documentation">📖</a> <a href="#example-disjfa" title="Examples">💡</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[package]: https://www.npmjs.com/package/vue-minesweeper
[version-badge]: https://img.shields.io/npm/v/vue-minesweeper.svg?style=flat-square
[license]: https://github.com/disjfa/vue-minesweeper/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/vue-minesweeper.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/disjfa/vue-minesweeper.svg?style=social
[github-watch]: https://github.com/disjfa/vue-minesweeper/watchers
[github-star-badge]: https://img.shields.io/github/stars/disjfa/vue-minesweeper.svg?style=social
[github-star]: https://github.com/disjfa/vue-minesweeper/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20vue-minesweeper!%20-%20Cool%timeline!%20Thanks%20@disjfa%20https://github.com/disjfa/vue-minesweeper%20%F0%9F%A4%97
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/disjfa/vue-minesweeper.svg?style=social
