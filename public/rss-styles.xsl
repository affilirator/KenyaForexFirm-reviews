<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/rss/channel">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="title"/> - RSS Feed</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            padding: 20px;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .header {
            border-bottom: 3px solid #0066cc;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }

          .header h1 {
            color: #0066cc;
            font-size: 28px;
            margin-bottom: 10px;
          }

          .header p {
            color: #666;
            font-size: 16px;
          }

          .rss-info {
            background: #e3f2fd;
            border-left: 4px solid #0066cc;
            padding: 15px;
            margin-bottom: 30px;
            border-radius: 4px;
          }

          .rss-info strong {
            color: #0066cc;
          }

          .feed-item {
            border-bottom: 1px solid #e0e0e0;
            padding: 20px 0;
          }

          .feed-item:last-child {
            border-bottom: none;
          }

          .feed-item h2 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          .feed-item h2 a {
            color: #0066cc;
            text-decoration: none;
            transition: color 0.2s;
          }

          .feed-item h2 a:hover {
            color: #0052a3;
            text-decoration: underline;
          }

          .feed-meta {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
          }

          .feed-description {
            color: #444;
            line-height: 1.7;
          }

          .categories {
            margin-top: 10px;
          }

          .category {
            display: inline-block;
            background: #f0f0f0;
            color: #666;
            padding: 4px 10px;
            margin-right: 8px;
            margin-top: 8px;
            border-radius: 3px;
            font-size: 13px;
          }

          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 14px;
          }

          @media (max-width: 768px) {
            body {
              padding: 10px;
            }

            .container {
              padding: 20px;
            }

            .header h1 {
              font-size: 24px;
            }

            .feed-item h2 {
              font-size: 18px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1><xsl:value-of select="title"/></h1>
            <p><xsl:value-of select="description"/></p>
          </div>

          <div class="rss-info">
            <strong>📡 This is an RSS feed.</strong> You can subscribe to it using your favorite RSS reader to get automatic updates when new content is published.
          </div>

          <xsl:for-each select="item">
            <div class="feed-item">
              <h2>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>

              <div class="feed-meta">
                <xsl:if test="pubDate">
                  Published: <xsl:value-of select="pubDate"/>
                </xsl:if>
              </div>

              <div class="feed-description">
                <xsl:value-of select="description"/>
              </div>

              <xsl:if test="category">
                <div class="categories">
                  <xsl:for-each select="category">
                    <span class="category">
                      <xsl:value-of select="."/>
                    </span>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </div>
          </xsl:for-each>

          <div class="footer">
            <p>© <xsl:value-of select="substring(lastBuildDate, 13, 4)"/> Kenya Forex Firm. All rights reserved.</p>
            <p>Last updated: <xsl:value-of select="lastBuildDate"/></p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>