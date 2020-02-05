# gm-hostname-in-title
This is a Greasemonkey script that puts the current host name in the window title.

The purpose of this script is for better integration with KeePass's Auto-Type option for "An entry matches if the host component of its URL is contained in the target window title." The combination of this script and that option allows you to activate the "Global auto-type" key and have KeePass fill in the current web page.

## Compatibility
This has only been tested with Greasemonkey in Firefox.

## Details
The hostname gets added in parentheses to the current title, for example `The Document Title (example.com)`. If you're using Firefox's Multi-Account Containers, the container is still listed last, for example `The Document Title (example.com) - Personal`.