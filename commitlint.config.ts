export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => /\[skip ci\]/g.test(message)],
}
