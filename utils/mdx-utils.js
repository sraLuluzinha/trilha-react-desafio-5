import { api } from '../services/api';

export const getPosts = async () => {
    const { data } = await api.get('/posts');

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (id) => {
    try {
        // Faz a requisição para buscar o post específico usando o ID
        const { data } = await api.get(`/posts/${id}`);

        if (data) {
            return data;
        }

        return {};
    } catch (error) {
        console.error("Erro ao buscar o post:", error);
        return {};
    }
};
