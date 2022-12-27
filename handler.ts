import mjml2html from 'mjml';

const mjmlTemplate = `
<mjml>
  <mj-body>
    <mj-section background-color="#fafafa">
      <mj-column width="400px">
        <mj-text font-style="italic" font-size="16px" color="#626262">Hello, World</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`

export function handler() {
  const { html } = mjml2html(mjmlTemplate);
  console.log(html);
}

