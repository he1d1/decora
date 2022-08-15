"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unstable_now = exports.unstable_UserBlockingPriority = exports.unstable_NormalPriority = exports.unstable_LowPriority = exports.unstable_ImmediatePriority = exports.unstable_IdlePriority = void 0;
exports.unstable_runWithPriority = unstable_runWithPriority;
const unstable_ImmediatePriority = 1;
exports.unstable_ImmediatePriority = unstable_ImmediatePriority;
const unstable_UserBlockingPriority = 2;
exports.unstable_UserBlockingPriority = unstable_UserBlockingPriority;
const unstable_NormalPriority = 3;
exports.unstable_NormalPriority = unstable_NormalPriority;
const unstable_LowPriority = 4;
exports.unstable_LowPriority = unstable_LowPriority;
const unstable_IdlePriority = 5;
exports.unstable_IdlePriority = unstable_IdlePriority;

function unstable_runWithPriority(_priority, callback) {
  return callback();
}

const unstable_now = performance.now.bind(performance);
exports.unstable_now = unstable_now;