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

  // uncomment this block to see the bug fixed (hack applied)
  // beforeModel(transition) {
  //   transition.state.fullQueryParams = undefined;
  // },

  model(params) {

    console.log(params);

    /*
    Getting:
    ```
    {category: "test", filter: "[1,2,3]", complexFilter: "{"something":"useful"}"}
    ```

    Instead of
    ```
    {category: "test", filter: Array(3), complexFilter: {…}}
    ```
    */

    return {
      foo: 'bar',
    };
  }
});
