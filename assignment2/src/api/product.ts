import instance from './index';

export const getAll = () => {
  const uri="/products"
  return instance.get(uri)
}

export const getById = (id: string) => {
  const uri="/products/" + id
  return instance.get(uri)
}