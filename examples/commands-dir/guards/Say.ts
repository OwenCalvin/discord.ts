import { ArgsOf, GuardFunction } from "../../../src";

export const Say = (text: string) => {
  const guard: GuardFunction = async (
    [message]: ArgsOf<"commandMessage">,
    client,
    on,
    next
  ) => {
    console.log(message.prefix, text);
    await next();
  };

  return guard;
};
