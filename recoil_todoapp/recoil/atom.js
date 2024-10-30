// src/recoil/atoms.js
import { atom } from 'recoil';

// Atom lưu trữ danh sách todos
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Atom lưu trữ trạng thái loading
export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

// Atom lưu trữ trạng thái lỗi
export const errorState = atom({
  key: 'errorState',
  default: null,
});
