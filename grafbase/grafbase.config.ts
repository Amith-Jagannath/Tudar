import { g, auth, config } from "@grafbase/sdk";
//@ts-ignore
const User = g
  .model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    performs: g.relation(() => Perform).optional(),
  })
  .auth((rules) => {
    rules.public().read();
  });
//@ts-ignore
const Perform = g
  .model("Perform", {
    score: g.int(),
    level: g.int(),
    streak: g.int(),
    createdBy: g.relation(() => User),
  })
  .auth((rules) => {
    rules.public().read();
    rules.private().create().delete().update();
  });


  const jwt = auth.JWT({
    issuer: "grafbase",
    secret: process.env.NEXTAUTH_SECRET!,
  });

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  },
});
