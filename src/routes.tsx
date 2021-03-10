import * as React from 'react';
import loadable from '@loadable/component';

export const LoadingComponent = <div>Loading...</div>;

export const IndexSection = loadable(() => import(/* webpackChunkName: "IndexSection" */'./sections/index/index.container'), {
    fallback: LoadingComponent,
});

export const ItemsSection = loadable(() => import(/* webpackChunkName: "ItemsSection" */'./sections/items/items.routes.container'), {
    fallback: LoadingComponent,
});

export const NotFoundSection = loadable(() => import(/* webpackChunkName: "NotFoundSection" */'./sections/not-found/not-found.container'), {
    fallback: LoadingComponent,
});