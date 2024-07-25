import { InMemoryCacheConfig } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { FaustHooks } from "@faustwp/core";

export class RelayStylePaginationPlugin {
  apply(hooks: FaustHooks) {
    const { addFilter } = hooks;

    addFilter(
      "apolloClientInMemoryCacheOptions",
      "faust",
      (options: InMemoryCacheConfig) => {
        return {
          ...options,
          typePolicies: {
            ...options.typePolicies,
            RootQuery: {
              ...options.typePolicies.RootQuery,
              fields: {
                posts: relayStylePagination(),
              },
            },
            ContentType: {
              fields: {
                contentNodes: relayStylePagination(),
              },
            },
          },
        };
      }
    );
  }
}
