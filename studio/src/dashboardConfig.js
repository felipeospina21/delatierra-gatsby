export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f77bcef218ca027bd454e5a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s8su11km',
                  apiId: 'b159032f-8ec2-4f2e-9ff8-7a02469d823d'
                },
                {
                  buildHookId: '5f77bcef68402726e1cea9ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w2sq865y',
                  apiId: 'af41be47-3d2d-4ada-aaa8-4d524aedcf80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipeospina21/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w2sq865y.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
