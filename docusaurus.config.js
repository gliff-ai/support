// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'gliff.ai DOCUMENT',
    tagline: 'building trustworthy AI with you',
    url: 'https://your-docusaurus-test-site.com',  // FIXME where is this used?
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    // FIXME where are the next two used?
    organizationName: 'gliff-ai', // Usually your GitHub org/user name.
    projectName: 'roadmap', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                // title: 'gliff.ai',
                logo: {
                    alt: 'gliff.ai logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'DOCUMENT',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/gliff-ai',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Our Code',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/gliff-ai',
                            },
                            {
                                label: 'Our roadmap',
                                href: 'https://github.com/gliff-ai/roadmap',
                            },
                            {
                                label: 'GitHub Discussions',
                                href: 'https://github.com/gliff-ai/roadmap/discussions',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} gliff Limited Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
