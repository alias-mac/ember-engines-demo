import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    category: {
      refreshModel: true,
    },
    filter: {
      refreshModel: true,
      type: 'array',
    },
    complexFilter: {
      refreshModel: true,
      type: 'array',
    },
  },

  model(params) {
    console.log(params);

    return {
      foo: 'bar',
    };
  }
});
