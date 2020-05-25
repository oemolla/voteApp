export function readStorageItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function writeStorageItem(key,value) {
  value = JSON.stringify(value);
  return localStorage.setItem(key,value);
}

export function removeStorageItem(key) {
  return localStorage.removeItem(key);
}

export function dynamicSort(property){
  return function(a, b) {
    return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
  };
}