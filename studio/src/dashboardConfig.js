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
                  buildHookId: '5f4c1e12281ab682da5f5e50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-oiuwv8um',
                  apiId: '8c85b15f-11df-4383-aeb4-82c656969223'
                },
                {
                  buildHookId: '5f4c1e12a088291c687b0c2b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-1psq5xp5',
                  apiId: '4ccfb2c1-e8c5-4d8e-b7b5-fa0e2f693df9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-1psq5xp5.netlify.app', category: 'apps' }
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
