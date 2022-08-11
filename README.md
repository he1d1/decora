# Decora

A modern MVC for Typescript.

## Examples

Here are some things that are made easy with Decora:

### Counter

```tsx
@page('/') @island('counter-island')
class Counter {
  count = 0;
  render() {
    return html`<button onclick={() => this.count++}>counter: {this.count}</button>`
  }
}
```
