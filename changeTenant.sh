#!/bin/bash

echo ""

TENANT_ITEMS=("app.json" "assets")
THIS_SCRIPT=$0
TENANT_TO_SWITCH_TO=$1

# find the empty tenant dir (this is the current tenant)
for i in tenants/* ; do
  if [ ! "$(ls -A $i)" ]; then
    if [ $CURRENT_TENANT ]; then
      echo "ERROR: multiple empty tenant directories!"
      exit 1
    fi
    CURRENT_TENANT=$(basename $i)
  fi
done

# if there is no empty tenant dir, then we do not know who the current tenant is
if [ ! $CURRENT_TENANT ]; then
  echo "ERROR: no empty tenant directory!"
  exit 1
fi

if [ ! -d "tenants/$TENANT_TO_SWITCH_TO" ]; then
  echo "This tenant does not exist."
  echo "Would you like to create this tenant from a copy of the current tenant ($CURRENT_TENANT)? [y/n]"

  read DO_CREATE_TENANT

  if [ "$DO_CREATE_TENANT" = "y" ]; then
    mkdir "tenants/$TENANT_TO_SWITCH_TO" || exit 1;
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      cp -R ./$TENANT_ITEM "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" || exit 1;
    done

    echo "The tenant $TENANT_TO_SWITCH_TO has been created."

    eval "$THIS_SCRIPT $TENANT_TO_SWITCH_TO"
  fi

elif [ ! "$(ls -A tenants/$TENANT_TO_SWITCH_TO)" ]; then
  echo "This tenant appears to already be selected."

else

  for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
    if [ ! -d "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ] && [ ! -f "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ]; then
      INVALID_TENANT_DIR_CONTENTS=1
    fi
  done
  
  if [ $INVALID_TENANT_DIR_CONTENTS ]; then
    echo "The directory for this tenant does not have the required contents."

  else

    ##### everything checks out, now we make the switch #####

    # move current tenant items to the empty dir
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      mv ./$TENANT_ITEM "tenants/$CURRENT_TENANT/$TENANT_ITEM" || exit 1;
    done

    # move current tenant items to the empty dir
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      mv "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ./$TENANT_ITEM || exit 1;
    done

    echo "Changed tenant to $TENANT_TO_SWITCH_TO."
  fi
fi

echo ""