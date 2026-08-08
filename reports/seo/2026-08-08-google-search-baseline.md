# Google Search baseline — 2026-08-08

This document is the reference point for measuring future changes to PentaFlow's Google discoverability. It summarizes the Google Search Console exports captured on 2026-08-08 and the accompanying Links and Sitemaps screenshots.

## Source material

- `pentaflow.ai-Performance-on-Search-2026-08-08.zip`
- `pentaflow.ai-Coverage-2026-08-08.zip`
- Google Search Console Links screenshot captured 2026-08-08
- Google Search Console Sitemaps screenshot captured 2026-08-08
- Reporting filter: Web search, last three months
- Performance period: 2026-05-07 through 2026-08-06

The original ZIP exports were supplied from the owner's Google Search Console account. The metrics below are preserved here so this baseline does not depend on the files remaining in the Downloads folder.

## Performance baseline

| Metric | Result |
| --- | ---: |
| Clicks | 41 |
| Impressions | 320 |
| CTR | 12.81% |
| Average position | 8.19 |
| Pages receiving traffic | 1 |
| Traffic-receiving page | `https://pentaflow.ai/` |

### Period comparison

The averages below were calculated from the daily rows in the export. Position is impression-weighted.

| Period | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| First 28 days of export | 8 | 77 | 10.39% | 8.05 |
| Prior 28 days | 13 | 116 | 11.21% | 11.93 |
| Last 28 days | 18 | 108 | 16.67% | 4.77 |

The recent direction is encouraging, but the sample is too small for a confident trend claim. One day, 2026-07-21, generated 29 impressions—about 27% of the final 28-day period.

### Geography and device

- Germany, Austria, and Switzerland produced all 41 clicks and 269 of 320 impressions (84.1%).
- Desktop: 26 clicks, 253 impressions, 10.28% CTR, position 8.35.
- Mobile: 15 clicks, 67 impressions, 22.39% CTR, position 7.61.
- The mobile/desktop differences are not actionable yet because the sample is small.

## Query baseline and limitation

Google's visible query table accounts for only 8 of 41 clicks and 68 of 320 impressions. In other words, approximately 80% of performance cannot be attributed to named queries in this export because Search Console omits some query data for privacy.

Visible directional themes include:

- PentaFlow and spelling variants
- PENTA ERP
- PENTA AI / PENTA KI
- PSI Penta
- PSI Penta with Inventor or Vault

These are candidate topics, not sufficient evidence for building a group of dedicated landing pages. Page architecture should not be decided from the visible query rows alone.

## Indexing and sitemap baseline

| Metric | Result |
| --- | ---: |
| Known/discovered URLs | 3 |
| Indexed URLs | 1 |
| Not indexed URLs | 2 |
| Excluded by `noindex` | 1 |
| Redirecting URL | 1 |
| Sitemap status | Successful |
| Sitemap last read | 2026-03-13 |

At capture time, `sitemap.xml` lists:

- `https://pentaflow.ai/`
- `https://pentaflow.ai/impressum.html`
- `https://pentaflow.ai/datenschutz.html`

Both legal pages contain `noindex, follow`. Because the sitemap is intended to identify canonical URLs that should appear in search results, these two pages should not be in it while they remain `noindex`. Their exclusion from Google's index is not inherently a problem. The redirecting URL still needs to be identified in Search Console before deciding whether anything is wrong.

## Link baseline

- External links reported by Search Console: 0
- Internal links reported by Search Console: 0

Search Console's Links report can be delayed and is not exhaustive. Nevertheless, zero reported external links is evidence of little currently measurable authority. Zero internal links is less concerning while only one page is indexable; in-page anchor links do not create a multi-page internal-link structure.

## ChatGPT visibility

This export measures Google Search only. It does not establish a ChatGPT visibility baseline. A separate baseline should track:

- referrals from ChatGPT and other answer engines in web analytics;
- whether PentaFlow is mentioned or cited for a fixed set of relevant prompts;
- authoritative third-party mentions and citations.

## Action status

- [x] Fix layout shift / Core Web Vitals issue — reported completed by the owner on 2026-08-08; field data should be checked after enough new visits accrue.
- [x] Remove `noindex` legal URLs from `sitemap.xml` — completed 2026-08-08; the sitemap now lists only the canonical homepage.
- [ ] Identify the URL classified as “Page with redirect” and confirm the redirect is intentional — public checks on 2026-08-08 confirmed that the HTTP and `www` homepage variants intentionally redirect to `https://pentaflow.ai/`, but the exact URL represented by Search Console's row still requires inspection in Search Console.
- [ ] Inspect `https://pentaflow.ai/` in Search Console, run a live test, and confirm Google's selected canonical is the homepage.
- [ ] After sitemap cleanup, resubmit `https://pentaflow.ai/sitemap.xml` in Search Console.
- [ ] Develop credible third-party mentions/links, ideally through customers, partners, or the PSI/PENTA ecosystem.
- [ ] Repeat the same three-month Search Console export regularly, preserving the same Web search filter.

## Comparison rules for the next baseline

Compare total impressions, clicks, CTR, indexed indexable pages, referring sites, and visible non-brand query themes. Treat average position carefully because it changes with the mix of queries. Do not interpret a short-term percentage change as meaningful without checking the underlying impression count and daily outliers.
