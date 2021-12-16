export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61bbad24183b3500921cc75f',
                  title: 'Sanity Studio',
                  name: 'fairway-maritime-website-studio',
                  apiId: 'f0bf0355-675c-48fa-82c7-b06a674ba398'
                },
                {
                  buildHookId: '61bbad256545ed008eea5ede',
                  title: 'Landing pages Website',
                  name: 'fairway-maritime-website',
                  apiId: 'e3988f34-d776-4daa-a43d-9b0ab4936e19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianDam/fairway-maritime-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fairway-maritime-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
