export const sortType = {
  point:'point',
  creationDate : 'creationDate',
  minusPoint:'minusPoint'
};

export const sortOptions = [
  {
    key: 0,
    value: sortType.point,
    label: 'Most Voted (Z > A)'
  },
  {
    key: 1,
    value: sortType.minusPoint,
    label: 'Less Voted (A > Z)'
  }
];

export const storageKey = 'siteData';

export const urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
