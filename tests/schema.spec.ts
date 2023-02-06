const Fs = require("fs");
const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true });

const schema = {
  type: "object",
  required: [
    "__typename",
    "id_str",
    "text",
    "favorite_count",
    "conversation_count",
    "created_at",
    "user",
  ],
  properties: {
    __typename: {
      const: "Tweet",
    },
    id_str: {
      type: "string",
    },
    text: {
      type: "string",
    },
    favorite_count: {
      type: "number",
    },
    conversation_count: {
      type: "number",
    },
    created_at: {
      type: "string",
      //format: "date-time"
    },
    user: {
      type: "object",
      required: ["id_str", "name", "screen_name", "profile_image_url_https"],
      properties: {
        id_str: {
          type: "string",
        },
        name: {
          type: "string",
        },
        screen_name: {
          type: "string",
        },
        profile_image_url_https: {
          type: "string",
        },
      },
    },
  },
};

const validate = ajv.compile(schema);

test("1618912394968981512", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1618912394968981512.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
test("1619113525435326465", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1619113525435326465.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
test("1621627317301776387", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1621627317301776387.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
test("1621647895794716674", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1621647895794716674.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
test("1621653950947799042", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1621653950947799042.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
test("1619818349525086208", async () => {
  const data = JSON.parse(
    Fs.readFileSync("./tests/fixtures/1619818349525086208.json", "utf-8")
  );

  validate(data);
  expect(validate.errors).toBe(null);
});
