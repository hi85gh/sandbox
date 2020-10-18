"use strict";
async function foo() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
}
;
(async () => {
    await foo();
})();
