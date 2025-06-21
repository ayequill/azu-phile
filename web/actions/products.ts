"use server";
import axiosClient from "@/lib/axios-client";
import { StrapiProductResponse, StrapiProductsResponse } from "@/types/product";

const getProducts = async () => {
  const response = await axiosClient.get<StrapiProductsResponse>(
    "/api/products?populate=image&populate=category&populate=includes&populate=gallery.image&sort=createdAt:desc"
  );
  return response.data;
};

const getProductBySlug = async (slug: string) => {
  const response = await axiosClient.get<StrapiProductResponse>(
    `/api/products/${slug}?populate=image&populate=category&populate=includes&populate=gallery.image`
  );
  return response.data;
};

export { getProducts, getProductBySlug };
