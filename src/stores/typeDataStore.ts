import { writable, derived } from 'svelte/store';
import { hostRootAddr } from '../helpers/hostRoot';
import { currentPath } from './locationStore';

const defaultTypes = [
  'bool',
  'char',
  'i8',
  'u8',
  'short',
  'i16',
  'u16',
  'int',
  'i32',
  'u32',
  'long',
  'i64',
  'u64',
  'long long',
  'i128',
  'u128',
  'float',
  'f32',
  'double',
  'f64',
  'long double'
];

interface ITypeData {
  [path: string]: {
    [typeName: string]: {
      path: string,
      size: number
    }
  }
};

const currStuctPathStore = () => {
  let currValue = '';
  const {subscribe, set} = writable('');

  return {
    subscribe,
    set: (path: string) => {
      let strIdx;
      if ((strIdx = path.toLowerCase().indexOf("/structs/")) === -1) return;
      path = path.substring(0, strIdx + 8);
      if (path != currValue) {
        currValue = path;
        set(path);
      }
    }
  }
}

export const currStructPath = currStuctPathStore();

const typeDataStore = () => {
  const {subscribe, update} = writable(JSON.parse(localStorage.getItem("structs") || '{}') as ITypeData);

  return {
    subscribe,
    addTypes: async (path: string) => {
      const addedTypeData = await (await fetch(`${hostRootAddr}${path}/_consolidated.json`)).json();

      update(n => {
        const out = {
          ...n,
          [path]: addedTypeData
        };
        localStorage.setItem("structs", JSON.stringify(out));
        return out;
      })
    },
  }
}

export const typeData = typeDataStore();

currStructPath.subscribe((newPath: string) => {
  if (newPath.length)
    typeData.addTypes(newPath);
})

currentPath.subscribe((newPath: string) => {
  currStructPath.set(newPath);
})

export const typeList = derived(
  [typeData, currStructPath],
  ([$typeData, $currStructPath]) => ($typeData[$currStructPath] == undefined) ? [...defaultTypes] : [...defaultTypes, ...Object.keys($typeData[$currStructPath])]
);
